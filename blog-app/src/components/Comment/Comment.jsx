import React, { Component } from 'react';

import styles from './Comment.module.css';

class Comment extends Component {
	handleSubmitUpdate(e) {
	    e.preventDefault();
	    let author = this.props.author,
	        content = this.refs.content.value,
	        date = this.props.date;
	    this.props.handleCommentUpdate(this.props.index, {author, content, date});
	}

	render() {
        let {content, author, date, editToggle} = {...this.props},
            editButton = editToggle ? '取消' : '编辑',
            contentDiv = editToggle &&
                <form className={styles.editContent} onSubmit={(e) => this.handleSubmitUpdate(e)}>
                  <textarea defaultValue={content} ref="content"></textarea>
                  <button>完成</button>
                </form>

        return (
	        <div className={styles.comment}>
				<div className={styles.content}>{content}</div>
	            <div className={styles.metadata}>
	              	<div className='CommentAuthor'>{author}</div>
	              	<div className='CommentDate'>{date}</div>
	              	<a className='option' onClick={this.props.handleEditToggle}>{editButton}</a>
	            </div>
				{contentDiv}
	        </div>
        );
    }
}

export default Comment;