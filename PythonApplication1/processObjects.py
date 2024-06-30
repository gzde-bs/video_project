import cv2
from ultralytics import YOLO
from werkzeug.utils import secure_filename


model = YOLO("yolov8n.pt")

def process_video(video_path, object_classes, use_gpu):

    class_names = {
    0: "person", 1: "bicycle", 2: "car", 3: "motorbike", 4: "aeroplane", 5: "bus", 6: "train", 7: "truck", 8: "boat", 9: "traffic light", 
    10: "fire hydrant", 11: "stop sign", 12: "parking meter", 13: "bench", 14: "bird", 15: "cat", 16: "dog", 17: "horse", 18: "sheep", 19: "cow", 
    20: "elephant", 21: "bear", 22: "zebra", 23: "giraffe", 24: "backpack", 25: "umbrella", 26: "handbag", 27: "tie", 28: "suitcase", 29: "frisbee", 
    30: "skis", 31: "snowboard", 32: "sports ball", 33: "kite", 34: "baseball bat", 35: "baseball glove", 36: "skateboard", 37: "surfboard", 
    38: "tennis racket", 39: "bottle", 40: "wine glass", 41: "cup", 42: "fork", 43: "knife", 44: "spoon", 45: "bowl", 46: "banana", 47: "apple", 
    48: "sandwich", 49: "orange", 50: "broccoli", 51: "carrot", 52: "hot dog", 53: "pizza", 54: "donut", 55: "cake", 56: "chair", 57: "sofa", 
    58: "pottedplant", 59: "bed", 60: "diningtable", 61: "toilet", 62: "tvmonitor", 63: "laptop", 64: "mouse", 65: "remote", 66: "keyboard", 
    67: "cell phone", 68: "microwave", 69: "oven", 70: "toaster", 71: "sink", 72: "refrigerator", 73: "book", 74: "clock", 75: "vase", 
    76: "scissors", 77: "teddy bear", 78: "hair drier", 79: "toothbrush"
}



    cap = cv2.VideoCapture(video_path)
    fps = cap.get(cv2.CAP_PROP_FPS)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    

    # Output video writers
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out_all = cv2.VideoWriter("C:/summaview/static/output_video_with_boxes_all.mp4", fourcc, fps, (width, height))
    out_class = cv2.VideoWriter(f"C:/summaview/static/output_video_with_boxes_classes.mp4", fourcc, fps, (width, height))

    # Keep track of processed frames
    processed_frames = set()

    # Process video frames
    frame_number = 0
    while cap.isOpened():
        ret, frame = cap.read()
               
        if not ret:
            break

        width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
        height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

        frame_number += 1

        # Object detection
        if use_gpu ==1:
            results = model.predict(frame,device=0)
            
        elif use_gpu ==0:
            results = model.predict(frame,device='cpu')
        

        class_detected = False

        # Draw bounding boxes
        for result in results:
            for box in result.boxes:
                class_id = box.cls[0].item()
                class_name = class_names.get(class_id, "Unknown")
                coords = [int(coord) for coord in box.xyxy[0].tolist()]
                color = (0,255,0) #green

                cv2.rectangle(frame, (coords[0], coords[1]), (coords[2], coords[3]), color, 2)
                cv2.putText(frame, f"{class_name} ({round(box.conf[0].item(), 2)})", (coords[0], coords[1] - 10),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)
                # If the object class is one of the specified classes
                if class_id in object_classes:
                    class_detected = True

        # 1 Write the frame with bounding boxes to the output video for frames with the specified object classes
        if class_detected and frame_number not in processed_frames :
            out_class.write(frame)
            processed_frames.add(frame_number)  # Add the processed frame to the others

        # 2 Write the frame with bounding boxes to the output video for all frames
        out_all.write(frame)

    # Release video capture objects
    cap.release()
    out_all.release()
    out_class.release()

    # Return the paths to videos
    return {
        "all": "C:/summaview//static/output_video_with_boxes_all.mp4",
        "classes": "C:/summaview//static/output_video_with_boxes_classes.mp4"
        
    }