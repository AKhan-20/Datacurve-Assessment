from fastapi import FastAPI
import uuid
import subprocess

app = FastAPI()

@app.post("/execute")
async def execute(request):    
    filePath = f"/{uuid.uuid4()}.py"
    
    with open(filePath, "w") as f:
        f.write(request.code)
    
    result = subprocess.run(["python3", filePath], capture_output=True, timeout=5)
    return {"output": result.stdout, "error": result.stderr}


    