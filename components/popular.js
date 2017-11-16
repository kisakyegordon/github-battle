import React, {Component} from 'react';
import PropTypes from 'prop-types';

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



class Popular extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All',
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang){
        this.setState(function (){
            return {
                selectedLanguage: lang,
            }
        });
    }

    render(){
        // var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return (

            <SelectLanguage 
            selectedLanguage={this.state.selectedLanguage}
            onClick={this.updateLanguage}
            />
        //     <div>
        //     <ul className='languages'>
        //     {languages.map(function (lang){
        //         return (
        //             <li key={lang}
        //             style={lang === this.state.selectedLanguage? {color:'red'}: null}
        //             onClick={this.updateLanguage.bind(null, lang)}
        //             > 
        //             {lang} </li>
        //         )
        //     }, this)
        // }
        // </ul>
        // </div>
        )
        
    }
}

export default Popular;