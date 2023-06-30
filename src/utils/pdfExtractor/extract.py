from PyPDF2 import PdfReader
import os
script_path = os.path.abspath(__file__)
script_dir = str(os.path.dirname(script_path))
path = f"{script_dir}/cv2.pdf"
reader = PdfReader(path)
number_of_pages = len(reader.pages)
page = reader.pages[0]
obj = page.get_object()
text = page.extract_text()
print(text)
