import { useState, useEffect } from "react";
import Post from "../../models/posts/post";
import { warning, success } from "../../components/common/toast/toast";
import postService from "../../services/post";
import { usePostContext } from "./usepostcontext";
import axios from "axios";

const useFetchPosts = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const { dispatch } = usePostContext()

	const source = axios.CancelToken.source()

	const fetchPosts = async () => {
		setIsLoading(true);
		setError(null);
		try {
			const res = await postService.getPosts(source.token);
			if (!res) throw new Error("Error fetching posts");
			const posts = await res.posts.map((post) => new Post().fromJson(post));
			setIsLoading(false);
			dispatch({ type: "GET_ALL_POST", payload: posts.sort((a, b) => b.id - a.id) })
		} catch (error) { 
			if(error.code !== 'ERR_CANCELED'){
				setIsLoading(false);
				setError(error);
				warning(error.message);
			}
		}
	};

	return { isLoading, error, source, fetchPosts};
};

export default useFetchPosts;
