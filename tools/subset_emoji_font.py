# Script based on https://www.gyford.com/phil/writing/2023/11/06/subset-emoji-font-python/
from fontTools import subset

# One of the files downloaded from Google Fonts:
source_font_path = "NotoColorEmoji-Regular.ttf"

# Where we want to write our new file to. Note, it's woff2:
destination_font_path = "Noto Emoji Color Subset.woff2"

# The only emojis that we want in our new font:
emojis = ["🔗", "🗨️", "💌", "😢", "👪", "🔁", "🖨️", "🔋️", "🎨️", "🤸", "🏗️", "📧", "💡"]

# Create a list of unicode codes representing the characters in our emojis:
codes = []
for emoji in emojis:
    for e in emoji:
        codes.append("U+{:X}".format(ord(e)))

unicodes = ",".join(codes)

args = [
    source_font_path,
    f"--output-file={destination_font_path}",
    f"--unicodes={unicodes}",
    "--flavor=woff2",
]

subset.main(args)

