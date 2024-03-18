import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://qidzqqbpxpahhdmyeqdt.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpZHpxcWJweHBhaGhkbXllcWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MTI1ODQsImV4cCI6MjAyNjA4ODU4NH0.Cl3wT3L0Afvn3SMXGNXmVF4zbjLng-S4ux1WMb0q7cc",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpZHpxcWJweHBhaGhkbXllcWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MTI1ODQsImV4cCI6MjAyNjA4ODU4NH0.Cl3wT3L0Afvn3SMXGNXmVF4zbjLng-S4ux1WMb0q7cc"
    }
})