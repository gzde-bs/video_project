from flask import Flask, jsonify, request
import os
from ultralytics import YOLO
from processObjects import process_video
from processHumanColor import process_human
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

app.config['SECRET_KEY'] = 'your_secret_key'
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
STATIC_FOLDER = 'C:/summaview/static'
if not os.path.exists(STATIC_FOLDER):
    os.makedirs(STATIC_FOLDER)
ALLOWED_EXTENSIONS = {'mp4'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

model = YOLO("yolov8n.pt")

print("heloooooo")

@app.route('/detect', methods=['POST'])
def detect_objects():
    detect_option = int(request.json.get('detect'))

    if 'video_path' not in request.json:
        return jsonify({'error': 'No video path provided'})

    video_path = request.json['video_path']

    if not os.path.exists(video_path):
        return jsonify({'error': 'Invalid video path'})

    # Fix the key name to match the frontend (object_classes)
    object_classes = [int(cls) for cls in request.json.get('object_classes', [])]
    use_gpu = int(request.json.get('use_gpu', 0))

    if detect_option == 0:
        results = process_video(video_path, object_classes, use_gpu)
    elif detect_option == 1:
        color = str(request.json.get('color', ''))
        results = process_human(video_path, object_classes, use_gpu, color)

    return jsonify({'results': results, 'output_video_path': "C:/summaview/static/output_video_with_boxes_all.mp4"})

if __name__ == '__main__':
    app.run(debug=True)

