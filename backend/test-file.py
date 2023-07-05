from langchain.chat_models import ChatOpenAI
from langchain.prompts.chat import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    AIMessagePromptTemplate,
    HumanMessagePromptTemplate,
)
from langchain.schema import AIMessage, HumanMessage, SystemMessage
from secret_keys import OPENAI_API_KEY

chat = ChatOpenAI(temperature=0, openai_api_key = OPENAI_API_KEY)

system_template = """You are a helpful assistant that translates {input_language} to {output_language}.
    The content you translate are srt files. Do not attempt to translate it word by word. Rather, be logical and translate the meaning of the text, keeping the time stamps in place.
    Finally, do not include anything other the translated srt file in your response."""
system_message_prompt = SystemMessagePromptTemplate.from_template(system_template)
human_template = "{text}"
human_message_prompt = HumanMessagePromptTemplate.from_template(human_template)

chat_prompt = ChatPromptTemplate.from_messages(
    [system_message_prompt, human_message_prompt]
)

response = chat(
    chat_prompt.format_prompt(
        input_language="English", output_language="Finnish", text="I love programming."
    ).to_messages()
)

print(response.content)


