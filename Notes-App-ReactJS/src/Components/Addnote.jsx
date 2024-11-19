import { useState } from "react";

const Addnote = ({ addNote }) => {

    const [title, setTitle] = useState("");

    const [body, setBody] = useState("");

    const jumlahText = 50;

   function changeSubText(e) {
        return setBody(e.target.value)
   }

    function handleChange(e) {
        if (jumlahText - e.target.value.length >= 0) {
            return setTitle(e.target.value)
        } else {
            return alert("Maksimal karakter yang diinputkan adalah 50 karakter!")
        }
    }

    function handleClick() {
    // Membuat kondisi jika text yang diinputkan tidak boleh sampai kosong.
        if (title.trim().length > 0 && body.trim().length > 0) { 
            addNote(title, body);
            setTitle(''); // ---> Setelah catatannya berhasil ditambahkan, maka text areanya akan ke-refresh dan kosong kembali.
            setBody('');
            return;
        } else {
            return alert("Mohon untuk mengisi judul dan deskripsi catatannya terlebih dahulu!")
        }
    };

    return (
        <>
           <div className='note new'>
                <textarea 
                    style={{ fontSize: "19px" }}
                    placeholder="Ketik disini untuk menambahkan judul catatan baru..."
                    value={title}
                    onChange={handleChange}
                >
                </textarea>

                <textarea
                    rows="8"
                    cols="10"
                    style={{ fontSize: "19px", marginTop: "16px" }}
                    placeholder="Ketik disini untuk menambahkan deskripsi catatan baru..."
                    value={body}
                    onChange={changeSubText}
                >
                </textarea>

                <div className="note-footer">
                    <small>{jumlahText - title.length} Characters Remaining</small>
                    <button className="save" onClick={handleClick}>Tambah</button>
                </div>
           </div>
        </>
    );
}

export default Addnote