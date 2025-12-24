from PIL import Image
import numpy as np

def check_transparency(input_path):
    print(f"Inspecting {input_path}...")
    try:
        img = Image.open(input_path).convert("RGBA")
        data = np.array(img)
        
        # Check top-left pixel
        tl_pixel = data[0, 0]
        print(f"Top-Left Pixel: R={tl_pixel[0]}, G={tl_pixel[1]}, B={tl_pixel[2]}, A={tl_pixel[3]}")
        
        if tl_pixel[3] == 0:
            print("Result: Top-left pixel is TRANSPARENT.")
        else:
            print("Result: Top-left pixel is OPAQUE (likely baked-in background).")
            
        # Check overall transparency
        # Count pixels with alpha < 255
        transparent_pixels = np.sum(data[..., 3] < 255)
        total_pixels = data.shape[0] * data.shape[1]
        percentage = (transparent_pixels / total_pixels) * 100
        print(f"Overall Transparency: {percentage:.2f}% of pixels have some transparency.")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    check_transparency("/Users/yohanmedalsy/.gemini/antigravity/brain/4cfc7abf-eaa7-44d7-be96-238bd030840b/uploaded_image_1764966607578.png")
