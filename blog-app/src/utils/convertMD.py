import json

file = r"../content/Spring_RESTful.md"
with open(file,'r') as f:
    output = f.read()
    content = rf'{output}'

print(content, end="")

data_path = r"../cardNote.json"
with open(data_path, 'rb') as f:
  data = json.loads(f.read())

request_id = 1
blogs = data['blogs']
for index, blog in enumerate(blogs):
  if request_id == blog["id"]:
    blogs[index]["content"] = content

data['blogs'] = blogs


with open(data_path, 'w',  encoding='utf-8') as f:
  json.dump(data, f, indent=4)