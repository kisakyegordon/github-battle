import React, {Component} from 'react'
import queryString from 'query-string';
import api from '../utils/api';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import PlayerPreview from './PlayerPreview';
import Loading from './Loading';


function Profile(props){
    var info = props.info;
    return (
        <PlayerPreview avatar={info.avatar_url} username= {info.login}>
        <ul className='space-list-items' >
            {info.name && <li> {info.name} </li> }
            {info.location && <li> {info.location} </li> }
            {info.company && <li> {info.company} </li> }
            <li>Followers: {info.followers} </li> 
            <li>Following: {info.following} </li> 
            <li>Public Repos: {info.public_repos} </li> 
            {info.blog && <li> <a href={info.blog}> {info.blog} </a> </li>}
        </ul>
        </PlayerPreview>

    );
}

Profile.propTypes = {
    info: PropTypes.object.isRequired
}

function Player (props){
    return (
        <div>
            <h1 className='header'> {props.label} </h1>
            <h3 style={{ textAlign:'center' }}> {props.score} </h3>

            <Profile info= {props.profile} />

        </div>
    )

}

Player.propTypes = {
    label: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    profile: PropTypes.object.isRequired
}

class Results extends Component{

    constructor(props){
        super(props);

        this.state = {
            winner: null,
            loser: null,
            error: '',
            loading: true
        }
    }

    componentDidMount(){
        var players = queryString.parse(this.props.location.search);
        api.battle([ players.playerOneName, players.playerTwoName])
            .then (function (results){
                
                if (results === null){
                    this.setState( function (){
                        return {
                        error: 'There is an error somewhere !',
                        loading: false
                        }
                        });
                    }

                this.setState( function (){
                    return {
                    winner: results[0],
                    loser: results[1],
                    error : '',
                    loading: false
                }
                });

                }.bind(this));


    }

    render(){

        var winner = this.state.winner;
        var loser = this.state.loser;
        var error = this.state.error;
        var loading = this.state.loading;

        if (loading === true){
            return <Loading />
        }

        if (error){
            return (
                <div>
                <p> {error} </p>
                <NavLink to='/battle'> Reset </NavLink>
                </div>
            )
        }

        return (
            <div>

            <div className='row'>

            <Player
            label = 'Winner'
            score = {winner.score}
            profile = {winner.profile}
             />



             <Player
            label = 'Loser'
            score = {loser.score}
            profile = {loser.profile}
             />

            </div>
            <NavLink className='button' to='/battle'> Reset </NavLink>

            </div>
        )




        return (
            <div>
            <h3> Results </h3>
            
            </div>
        );
    }
}

export default Results;