from telethon import TelegramClient
from telethon.tl.types import MessageMediaDocument
import asyncio
import os
import time

api_id = '22716244'
api_hash = 'bfae5cd8b2716e37bb7352153e791076'
phone_number = '+917985113984'
channel_username = 'https://t.me/CodeEaterLiveBootcamp'

client = TelegramClient('session', api_id, api_hash)

async def download_file(message, directory):
    try:
        if isinstance(message.media, MessageMediaDocument):
            mime_type = message.file.mime_type
            if mime_type.startswith('video'):
                extension = '.mp4'
                file_type = 'video'
            elif mime_type == 'application/pdf':
                extension = '.pdf'
                file_type = 'pdf'
            else:
                return False  # Skip other file types

            file_name = f"{file_type}_{message.id}{extension}"
            path = os.path.join(directory, file_name)
            await client.download_media(message, path)
            print(f"Downloaded: {path}")
            return True
    except Exception as e:
        print(f"Error downloading file: {str(e)}")
    return False

async def main():
    await client.start(phone=phone_number)
    print("Client Created")
    
    for directory in ['downloads/videos', 'downloads/pdfs']:
        if not os.path.exists(directory):
            os.makedirs(directory)
    
    channel = await client.get_entity(channel_username)
    
    video_count = 0
    pdf_count = 0
    start_time = time.time()
    
    async for message in client.iter_messages(channel):
        if message.media:
            if isinstance(message.media, MessageMediaDocument):
                mime_type = message.file.mime_type
                if mime_type.startswith('video'):
                    directory = 'downloads/videos'
                    if await download_file(message, directory):
                        video_count += 1
                elif mime_type == 'application/pdf':
                    directory = 'downloads/pdfs'
                    if await download_file(message, directory):
                        pdf_count += 1
            
            if (video_count + pdf_count) % 5 == 0:
                print(f"Downloaded {video_count} videos and {pdf_count} PDFs so far.")
        
        await asyncio.sleep(0.5)
        
        if time.time() - start_time > 3600:
            print("One hour has passed. Stopping the script.")
            break

    print(f"Total files downloaded: {video_count} videos and {pdf_count} PDFs")
    await client.disconnect()

if __name__ == '__main__':
    asyncio.run(main())