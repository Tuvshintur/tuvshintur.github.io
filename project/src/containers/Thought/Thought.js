import React, { Component } from 'react';
import { connect } from 'react-redux';

import Category from '../../components/UI/Category/Category';
import List from '../../components/UI/List/List';
import Spinner from '../../components/UI/Spinner/Spinner';
import styles from './Thought.module.css';
import { updateObject } from '../../utils/utility';
import * as actions from '../../store/action';

class Thought extends Component {
    componentDidMount() {
        this.props.onFetchPosts(this.props.categories);
    }

    onClickCategoryHandler = (title) => {
        const { categories } = this.props;
        const newCategories = categories.map((category) => {
            const flag = category.title === title ? true : false;
            return updateObject(category, { active: flag });
        });
        this.props.onFetchPosts(newCategories, title);
    };

    onClickListHandler = (id) => {
        console.log('list item', id);
    };

    render() {
        const content = this.props.loading ? (
            <Spinner />
        ) : (
            <List listItems={this.props.list} clicked={this.onClickListHandler} />
        );
        return (
            <div className={styles.Thought}>
                <Category categories={this.props.categories} clicked={this.onClickCategoryHandler} />
                {content}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.post.posts,
        loading: state.post.loading,
        error: state.post.error,
        categories: state.post.categories,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchPosts: (title, categories) => dispatch(actions.fetchPosts(title, categories)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Thought);
