import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://hmlmjvlfbokaoakgqfdz.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtbG1qdmxmYm9rYW9ha2dxZmR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1NTYxNjcsImV4cCI6MjAyMjEzMjE2N30.iJRxyjTwQrywkTweIJ2iNxUtRg5UOaCdFweeQwutpAY",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtbG1qdmxmYm9rYW9ha2dxZmR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1NTYxNjcsImV4cCI6MjAyMjEzMjE2N30.iJRxyjTwQrywkTweIJ2iNxUtRg5UOaCdFweeQwutpAY"
    }
})