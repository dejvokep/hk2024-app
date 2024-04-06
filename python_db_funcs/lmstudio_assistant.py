# Chat with an intelligent assistant in your terminal
from openai import OpenAI

# Point to the local server
client = OpenAI(base_url="http://localhost:1234/v1", api_key="lm-studio")

history = [
    {"role": "system", "content": "You are an intelligent financial assistant called Tatran. You always provide well-reasoned answers that are both correct and helpful."},
    {"role": "system", "content": "You are designed to assist users with their financial needs, such as budgeting, investing, and saving."},
    {"role": "user", "content": "Hello, introduce yourself to someone opening this program for the first time as Tatran, ai representative of TatraBanka. Be concise."},
]

while True:
    completion = client.chat.completions.create(
        model="model-identifier",
        messages=history,
        temperature=0.7,
        stream=True,
    )

    new_message = {"role": "assistant", "content": ""}
    
    for chunk in completion:
        if chunk.choices[0].delta.content:
            print(chunk.choices[0].delta.content, end="", flush=True)
            new_message["content"] += chunk.choices[0].delta.content

    history.append(new_message)

    print()
    history.append({"role": "user", "content": input("> ")})