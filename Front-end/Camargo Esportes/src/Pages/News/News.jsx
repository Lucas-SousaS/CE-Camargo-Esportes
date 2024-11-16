import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";

function News() {
    const { id } = useParams();
    const [noticia, setNoticia] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = `http://localhost/CE-Camargo-Esportes/Back-end/get_news.php?id=${id}`;


        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Erro ao buscar dados');
                }
                return res.json();
            })
            .then(data => {
                if (data.error) {
                    setError(data.error); 
                } else {
                    setNoticia(data); 
                }
            })
            .catch(err => {
                setError(err.message); 
            })
            .finally(() => {
                setLoading(false); 
            });

    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Header />
            <div>
                {noticia ? (
                    <>
                        <h1>{noticia.titulo}</h1>
                        <p>{noticia.conteudo}</p>
                        <span>{noticia.data}</span>
                    </>
                ) : (
                    <p>Notícia não encontrada.</p>
                )}
            </div>
        </>
    );
}

export default News;
