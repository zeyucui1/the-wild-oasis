import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://bmwsbxlsqehokeezxmse.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtd3NieGxzcWVob2tlZXp4bXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyMjA4NTksImV4cCI6MjAwOTc5Njg1OX0.nOZWPtp_3S5n3bJOir4KAuHhxyZFUn4p7QrnzSQroZ0'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase
