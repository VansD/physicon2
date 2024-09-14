import { Article } from "@/types/article";
import { PaginationStore } from "./paginatonStore";

class ArticleStore extends PaginationStore<Article>{
    articles: Article[] = [];
    error: string | null = null;

    constructor() {
        super();
    }

    setArticles = (articles: Article[]) => {
        this.articles = articles;
    }

    addArticles = (newArticles: Article[]) => {
        this.articles = [...this.articles, ...newArticles];
    }


    setError = (error: string | null) => {
        this.error = error;
    }

    fetchArticles = async (page: number, rubrics?: string[]) => {
        const apiUrl = `/api/articles?${rubrics && rubrics.length > 0 ? `rubrics=${rubrics?.join("__")}&` : ""}page=${page}`
        if (this.paginationData.currentPage <= this.paginationData.totalPages) {
            this.setLoading(true);
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                this.setArticles(data.pageProps.articles);
                this.setCurrentPage(data.pageProps.activePage);
                this.setTotalPages(data.pageProps.totalPages);
                this.setError(null)
            } catch (error) {
                this.setError(`Ошибка загрузки данных: ${error}`);
            } finally {
                this.setLoading(false);
            }
        }
    }
}

export const articleStore = new ArticleStore();