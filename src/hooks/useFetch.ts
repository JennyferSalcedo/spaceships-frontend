import { useEffect, useState } from 'react';
import { SpaceshipCreateRequest } from '../interfaces';

export const useFetch = (url: string) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  // Petición de datos al backend
  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });
    const resp = await fetch(url);
    const data = await resp.json();
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  // Creación de naves espaciales en el backend
  const postFetch = async (bodyRequest: SpaceshipCreateRequest) => {
    try {
      setState({
        ...state,
        isLoading: true,
      });
      const resp = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyRequest),
      });
      const data = await resp.json();
      setState({
        data,
        isLoading: false,
        hasError: null,
      });
    } catch (error) {
      console.log('ERROR!!', error);
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    postFetch,
    getFetch,
  };
};
