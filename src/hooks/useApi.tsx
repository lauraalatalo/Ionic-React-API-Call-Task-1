export enum SearchType {
    all = '',
    movie = 'movie',
    series = 'series',
    episode = 'episode'
}

export interface DetailsResult {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Array<{ Source: string; Value: string }>;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

export interface SearchResult {
    Title: string
    Year: string
    Poster: string
    imdbID: string
    Type: string
}

export interface SearchError {
    Response: string
    Error: string
}

export const useApi = () => {
    let url = 'https://www.omdbapi.com/'
    let apiKey = 'a353f986'

    const searchData = async (
        title: string,
        type: SearchType
    ): Promise<SearchResult[] | SearchError> => {
        const result = await fetch(
            `${url}?s=${encodeURI(title)}&type=${type}&apikey=${apiKey}`,
        )

        return result.json()
    }

    const getDetails = async (id: string): Promise<DetailsResult> => {
        const result = await fetch(`${url}?i=${id}&plot=full&apikey=${apiKey}`)
        return result.json()
    }

    return {
        searchData,
        getDetails
    }
}

export default useApi