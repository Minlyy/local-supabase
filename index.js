import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://ncdrjnizxlidosbznxjg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jZHJqbml6eGxpZG9zYnpueGpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwMjM4NzgsImV4cCI6MTk5MjU5OTg3OH0.VgCLCRkvXTfWOI-DwYm6XLoyl8XjUa82kk7zxNCm_9k'
const supabase = createClient(supabaseUrl, supabaseKey)


let { data: books, error } = await supabase
  .from('books')
  .select('*')

for (let book of books) {
  let bookList = document.getElementById('books');
  bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td>${book.description}</td></tr>`;
}