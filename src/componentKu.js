import React from 'react'

const componentKu = (props) => {
    const {hasilKu, angkaKu} = props
    return <p> ini adalah {hasilKu} ada {angkaKu} Rupiah </p>
}

export default componentKu

/**
 * disini yang kita parsing adalah property JSX dari hasilKu di app.js jadi
 * destrucring nya kita isi hasilKu dan angkaKu dan memanggil keduanya
 */