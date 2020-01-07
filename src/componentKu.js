import React from 'react'

const componentKu = (props) => {
    const {pekerjaan,tempatTinggal,umur,laptop,merk} = props
    return <p>ini adalah component saya dan {pekerjaan} {tempatTinggal} {umur} {laptop} {merk} </p>
}

export default componentKu

/* 
* const componentKu = () => {
    return <p>ini componentKu</p>
}
export default componentKu
cara pertama dasar untuk props

* cara kedua kita tambahankan argumen props di const componentku lalu tambahkan
{} karena file nya JSX lalu tambahkan props yang di app.js sehingga menjadi
{props.pekerjaan} 

atau dengan desctruturing const {pekerjaan} = props
component bisa diisi dengan banyak props
contoh saya tambahkan tempatTinggal & umur lalu tambah di desctruturing


export default componentKu agar component nya bisa di export*/