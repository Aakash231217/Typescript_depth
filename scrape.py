import asyncio
import aiohttp
import os
from telethon import TelegramClient
from telethon.tl.types import MessageMediaDocument
import time

api_id = '22716244'
api_hash = 'bfae5cd8b2716e37bb7352153e791076'
phone_number = '+917985113984'
channel_username = 'https://t.me/CodeEaterLiveBootcamp'

client = TelegramClient('session', api_id, api_hash)

async def download_file(session, message, directory):
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

            # Download directly using Telethon
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
    
    start_time = time.time()
    downloaded_count = 0
    
    async with aiohttp.ClientSession() as session:
        async for message in client.iter_messages(channel):
            if message.media:
                if isinstance(message.media, MessageMediaDocument):
                    mime_type = message.file.mime_type
                    if mime_type.startswith('video'):
                        directory = 'downloads/videos'
                    elif mime_type == 'application/pdf':
                        directory = 'downloads/pdfs'
                    else:
                        continue
                    
                    if await download_file(session, message, directory):
                        downloaded_count += 1
                        if downloaded_count % 5 == 0:
                            print(f"Downloaded {downloaded_count} files so far.")
            
            if time.time() - start_time > 3600:
                print("One hour has passed. Stopping the script.")
                break

    print(f"Total files downloaded: {downloaded_count}")
    await client.disconnect()

if __name__ == '__main__':
    asyncio.run(main())