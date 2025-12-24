from PIL import Image
import numpy as np

def analyze_logos():
    paths = [
        "public/logo-processed.png",
        "/Users/yohanmedalsy/.gemini/antigravity/brain/4cfc7abf-eaa7-44d7-be96-238bd030840b/uploaded_image_1764968092840.png"
    ]
    
    for i, path in enumerate(paths):
        print(f"--- Logo {i} ---")
        img = Image.open(path).convert("RGBA")
        data = np.array(img)
        
        # Crop to content to ignore huge empty space
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            data = np.array(img)
        
        # Analyze non-transparent pixels
        mask_opaque = data[..., 3] > 0
        if np.any(mask_opaque):
            pixels = data[mask_opaque]
            mean_color = np.mean(pixels, axis=0)
            print(f"Mean Color (RGBA): {mean_color}")
            
            # Check brightness
            brightness = (mean_color[0]*0.299 + mean_color[1]*0.587 + mean_color[2]*0.114)
            print(f"Mean Brightness: {brightness:.2f}")
            
            if brightness > 200:
                print("Verdict: Bright/White (Good for Dark Background)")
            else:
                print("Verdict: Dark/Colored (May blend into Dark Background)")
        else:
            print("Image is empty?")

if __name__ == "__main__":
    analyze_logos()
