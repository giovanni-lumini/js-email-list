/* 
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

//accedere all'API
//prendere solo l'email randomica
//inserirla in un li
//generare 10 li
//inserirli nel ul del DOM

//inserisco l'API nel ciclo for perchè l'API ne genera solo una, con il ciclo richiamiamo la funzione 10 volte
for (let i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => {
    //accesso a tutti i dati
    let result_response = response;
    /* console.log(result_response); */
    //accesso a tutti i dati, nello specifico a data
    let result_response_data = response.data;
    /* console.log(result_response_data); */
    //accesso a tutti i dati, nello specifico a response, all'interno di data (solo l'email randomica)
    let result_response_data_response = response.data.response;
    /* console.log(result_response_data_response); */

    const list = document.querySelector(".list");
    /* console.log(list); */
    list.innerHTML += `<li>${result_response_data_response}</li>`;
})
}








