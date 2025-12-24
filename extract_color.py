from PIL import Image
import numpy as np
from collections import Counter

def get_dominant_cyan(input_path):
    print(f"Analyzing {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    # Filter for Cyan-ish pixels
    # Logic: Green and Blue should be high, Red should be significantly lower
    # Use slicing to preserve (H, W) shape
    r = data[..., 0]
    g = data[..., 1]
    b = data[..., 2]
    a = data[..., 3]
    
    # Define "Cyan" mask:
    # 1. Significant brightness (avoid dark edges)
    # 2. G and B are dominant over R
    # 3. EXCLUDE White (where R is also high)
    mask_cyan = (g > r + 30) & (b > r + 30) & (a > 200) & (r < 200)
    
    if not np.any(mask_cyan):
        print("No cyan pixels found!")
        return

    # Indexing into 'data' directly with a boolean mask works if shape matches (Height, Width)
    # mask_cyan has shape (H, W). data has shape (H, W, 4).
    # We need to broadcast or index carefully.
    
    cyan_pixels = data[mask_cyan]
    
    # Count frequency of each color
    # We convert to tuples to make them hashable
    pixels_as_tuples = [tuple(p) for p in cyan_pixels]
    counts = Counter(pixels_as_tuples)
    
    # Get the most common colors
    most_common = counts.most_common(5)
    
    print("Top 5 Cyan tones found:")
    for color, count in most_common:
        hex_code = '#{:02x}{:02x}{:02x}'.format(color[0], color[1], color[2])
        print(f"Color: {color} - Hex: {hex_code} - Count: {count}")

    # Pick the absolute most common one as the "Brand Cyan"
    top_color = most_common[0][0]
    final_hex = '#{:02x}{:02x}{:02x}'.format(top_color[0], top_color[1], top_color[2])
    print(f"RECOMMENDED BRAND CYAN: {final_hex}")

if __name__ == "__main__":
    get_dominant_cyan("public/logo-processed.png")
