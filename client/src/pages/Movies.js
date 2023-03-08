import React, { useState, useEffect } from "react";
import axios from 'axios'
import {TvShow} from './Movie'
import styled from "styled-components";

// const SearchBarContainer = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   width: 34em;
//   height: 3.8em;
//   background-color: #fff;
//   border-radius: 6px;
//   box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
// `;

const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 21px;
  color: #12112e;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 27px;
  margin-right: 10px;
  margin-top: 6px;
  vertical-align: middle;
`;

// const CloseIcon = styled(motion.span)`
//   color: #bebebe;
//   font-size: 23px;
//   vertical-align: middle;
//   transition: all 200ms ease-in-out;
//   cursor: pointer;
//   &:hover {
//     color: #dfdfdf;
//   }
// `;

const LineSeperator = styled.span`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #d8d8d878;
`;

const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  overflow-y: auto;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WarningMessage = styled.span`
  color: #a1a1a1;
  font-size: 14px;
  display: flex;
  align-self: center;
  justify-self: center;
`;

const containerVariants = {
  expanded: {
    height: "30em",
  },
  collapsed: {
    height: "3.8em",
  },
};

function Movies() {
    const [post,setPost] = useState({})

    const [query, setQuery] = useState('')
    const [tvShows, setTvShows] = useState([]);
    // useEffect(()=>{
    //     const fetchUsers = async () => {
    //     const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`)
    //         console.log(res);
    //         setData(res.data)
    //     }
    //     console.log(fetchUsers);
    //     fetchUsers()
    // },[])
    useEffect(() => {
        axios.get(`http://api.tvmaze.com/search/shows?q=${query}`).then(res => {
            console.log(res);
            setTvShows(res.data)
        }).catch(err =>{console.log(err);})
    },[query]


    )
    return (<div>
        <input className="search"
            placeholder="Search.."
            onChange={(e) => setQuery(e.target.value)}
        />
         {tvShows.map(({ show }) => (
                <TvShow
                  key={show.id}
                  thumbanilSrc={show.image && show.image.medium}
                  name={show.name}
                  rating={show.rating && show.rating.average}
                />
              ))}
    </div>)
}
export default Movies