import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';
import Loading from './Loading';

function SelectLanguage(props){
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <div>
        <ul className='languages'>
        {languages.map(function (lang){
            return (
                <li key={lang}
                style={lang === props.selectedLanguage? {color:'red'}: null}
                onClick={props.onClick.bind(null, lang)}
                > 
                {lang} </li>
   
            )
        }, this)
    }
    </ul>
    </div>
    )
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

function RepoGrid(props){
    return (
        <ul className='popular-list'>
        {props.repos.map(function (repoly, index){
            return (
                <li key={repoly.name} className='popular-item'>
                 <div className='popular-rank'>#{index + 1} </div>
                 <ul className='space-list-items'>
                     <li>
                         <img className='avatar' src={repoly.owner.avatar_url} alt={'Avatar for' + repoly.owner.login} />
                    </li>
                    <li><a href={repoly.html_url}>{repoly.name} </a> </li>
                    <li>@{repoly.owner.login} </li>
                    <li> {repoly.stargazers_count} stars </li>
                 </ul>
                 {repoly.owner.login} 
                 </li>
            )
            
        })}
        </ul>

    );
}

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired,
}



class Popular extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount(){
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage(lang){
        this.setState(function (){
            return {
                selectedLanguage: lang,
                repos:null
            }
        });

        api.fetchPopularRepos(lang)
            .then(function (repos){
                // console.log(repos)
                this.setState(function (){
                    return {
                        repos: repos,
                    }
                })
            }.bind(this));
    }

    render(){
        return (
            <div>
            <SelectLanguage 
            selectedLanguage={this.state.selectedLanguage}
            onClick={this.updateLanguage}
            />
            {!this.state.repos? <Loading />: <RepoGrid repos={this.state.repos}/>}
            
            </div>
        )   
    }
}

export default Popular;