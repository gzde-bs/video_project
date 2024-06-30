import cv2
import numpy as np
from util import get_limits
from ultralytics import YOLO

model = YOLO('yolov8n.pt')

def detect_color2(frame, color, x1,y1,x2,y2):
    hsv_image = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    if color == 'black':
        # Convert frame to grayscale for black color detection
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        _, mask = cv2.threshold(gray, 20, 255, cv2.THRESH_BINARY_INV)
    else:
        lower_limit, upper_limit = get_limits(color=color)
        mask = cv2.inRange(hsv_image, lower_limit, upper_limit)

    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    for contour in contours:
        area = cv2.contourArea(contour)
        if area > 30:  # Adjust this threshold as needed
            x, y, w, h = cv2.boundingRect(contour)
            aspect_ratio = float(w) / h
            if 0.4 < aspect_ratio < 2.5:  # Adjust aspect ratio range as needed
                # Check if the contour is within the specified coordinates
                if x1 < x < x2 and y1 < y < y2:
                    return True  # Color found within specified coordinates

    return False  # Color not found within specified coordinates



    

