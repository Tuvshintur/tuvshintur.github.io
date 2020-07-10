import React, { Component } from 'react';
import { connect } from 'react-redux';

import Category from '../../components/UI/Category/Category';
import List from '../../components/UI/List/List';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import styles from './Thought.module.css';
import { updateObject, checkValidity } from '../../utils/utility';
import * as actions from '../../store/action';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

class Thought extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        form: {
            title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Title',
                },
                errormessage: 'Please Enter Title',
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            category: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {
                            value: 'Posts',
                            displayValue: 'Posts',
                        },
                        {
                            value: 'Achievements',
                            displayValue: 'Achievements',
                        },
                    ],
                },
                errormessage: 'Please Enter Valid category',
                value: 'Posts',
                validation: {},
                valid: true,
            },
            tags: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {
                            value: 'nodejs',
                            displayValue: 'nodejs',
                        },
                        {
                            value: 'react',
                            displayValue: 'react',
                        },
                        {
                            value: 'js',
                            displayValue: 'js',
                        },
                    ],
                    multiple: true,
                },
                errormessage: 'Please Enter Valid tags',
                value: [],
                validation: {},
                valid: true,
            },
        },
        formIsvalid: false,
        adding: false,
    };

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

    onAddHandler = (event) => {
        event.preventDefault();
        this.setState({ adding: true });
    };

    onCancelAddHandler = () => {
        this.setState({ adding: false });
    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    multipleSelectHandler = (array, value) => {
        if (array.includes(value)) return array.filter((e) => e !== value);
        else return [...array, value];
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const { form } = this.state;
        const updatedFormElement = updateObject(form[inputIdentifier], {
            value: form[inputIdentifier].elementConfig.multiple
                ? this.multipleSelectHandler(form[inputIdentifier].value, event.target.value)
                : event.target.value,
            valid: checkValidity(event.target.value, form[inputIdentifier].validation),
            touched: true,
        });

        const updatedForm = updateObject(form, {
            [inputIdentifier]: updatedFormElement,
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({ form: updatedForm, formIsValid: formIsValid });
    };

    postAddHandler = (event) => {
        event.preventDefault();
        let formData = {};
        const { form, editorState } = this.state;
        for (let formElementIdentifier in form) {
            formData[formElementIdentifier] = form[formElementIdentifier].value;
        }

        formData = updateObject(formData, { body: draftToHtml(convertToRaw(editorState.getCurrentContent())) });

        this.props.onAddPost(formData, this.props.token);
    };

    render() {
        const content = this.props.loading ? (
            <Spinner />
        ) : (
            <List listItems={this.props.list} clicked={this.onClickListHandler} />
        );

        const { adding, editorState, form, formIsValid } = this.state;

        const formElementsArray = [];
        for (let key in form) {
            formElementsArray.push({
                id: key,
                config: form[key],
            });
        }

        const formElements = (
            <form onSubmit={this.postAddHandler}>
                {formElementsArray.map((formElement) => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        errormessage={formElement.config.errormessage}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                />

                <Button type="Success" disabled={!formIsValid}>
                    Add
                </Button>
            </form>
        );

        return (
            <div className={styles.Thought}>
                <div className={styles.Black}>
                    <Modal show={adding} modalClosed={this.onCancelAddHandler}>
                        {formElements}
                    </Modal>
                </div>
                {this.props.isAuth ? <Button clicked={this.onAddHandler}>Add</Button> : null}
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
        isAuth: state.auth.token !== null,
        token: state.auth.token,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchPosts: (title, categories) => dispatch(actions.fetchPosts(title, categories)),
        onAddPost: (post, token) => dispatch(actions.addPost(post, token)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Thought);
