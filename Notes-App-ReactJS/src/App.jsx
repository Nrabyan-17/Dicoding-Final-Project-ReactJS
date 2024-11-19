import NotesList from "./Components/NotesList"
import { nanoid } from "nanoid"
import { useState, useEffect } from "react"
import "./index.css"
import Searchbar from "./Components/SearchBar"
import Toogle from "./Components/Toogle"
function App() {

  const [notes, setNotes] = useState([
      {
        id: nanoid(),
        title: "Babel",
        body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
        archived: false,
        createdAt: "2022-04-14T04:27:34.572Z",
      },

      {
        id: nanoid(),
        title: "Functional Component",
        body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
        archived: false,
        createdAt: "2022-04-14T04:27:34.572Z",
      },

      {
        id: nanoid(),
        title: "Modularization",
        body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
        archived: false,
        createdAt: "2022-04-14T04:27:34.572Z",
      },

      {
        id: nanoid(),
        title: "Lifecycle",
        body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya.",
        archived: false,
        createdAt: "2022-04-14T04:27:34.572Z",
      },

      {
        id: nanoid(),
        title: "ESM",
        body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
        archived: false,
        createdAt: "2022-04-14T04:27:34.572Z",
      },

      {
        id: nanoid(),
        title: "Module Bundler",
        body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
        archived: false,
        createdAt: "2022-04-14T04:27:34.572Z",
      },
]);

const [search, setSearch] = useState("");

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem('Note-App-ReactJS'));
  if (savedNotes) {
    return setNotes(savedNotes)
  }
}, []);

useEffect(() => {
  return localStorage.setItem('Note-App-ReactJS', JSON.stringify(notes))
}, [notes])


// Function yang berfungsi untuk memambahkan dan mencetak catatan baru, lalu datanya dikirimkan sampai ke komponen Addnote.
  const addNote = (title, body) => {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        title: title,
        body: body,
        archived: false,
        createdAt: date.toLocaleDateString()
      }
// Variabel newNotes akan menampung seluruh data catatan yang sudah ada pada state notes, kemudian data-datanya ditambahkan ke object newNote.
      const newNotes = [...notes, newNote];
      return setNotes(newNotes);
  };

  // Function untuk menghapus setiap komponen catatan yang ada
  function deleteNote(id) {
    const deleteNotes = notes.filter((note) => note.id !== id)
    return setNotes(deleteNotes)
  }

  return (
    <>
        <div className={`${darkMode && 'dark-mode'}`}>

            <div className="container">
              <h1>Notes App:</h1>
              <Toogle setDarkMode={setDarkMode} darkMode={darkMode}/>
              <Searchbar setSearch={setSearch}/>

              {/* // method filtering disini untuk melakukan pencarian catatan berdasarkan text yang diinputkan */}
              <NotesList notes={ notes.filter((note) => note.title.includes(search) )} addNote={addNote} deleteNote={deleteNote}/>
                
            </div>
            
        </div>
    </>
  )
}

export default App