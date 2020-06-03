
import {Component} from "react";
import {Space, Card, Checkbox, Col, Button, Modal} from "antd";
import React from "react";
import Todo from "../service/Todo";
import styles from "./styles.module.css";
import {deleteTodoById} from "../service/todoService";
import TodoUpdateModal from "./TodoUpdateModal";


interface TodoProp {
    todo: Todo;
    reload(): void;
}

interface TodoState {
    modalVisible: boolean;

    updateModalVisible: boolean;

}
class TodoItem extends Component<TodoProp, TodoState> {
    constructor(props: TodoProp) {
        super(props);
        this.state = {

            modalVisible: false,
            updateModalVisible: false,


            modalVisible: false

        }
    }

    showModal = () => {
        this.setState({
            modalVisible: true,
        });
    };

    handleOk = (e: any) => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
    };


    handleUpdate = () => {
        this.setState({
            updateModalVisible: true
        })
    }
    handleCancel = () => {
        this.setState({
            modalVisible: false,
            updateModalVisible: false

    handleCancel = (e: any) => {
        console.log(e);
        this.setState({
            modalVisible: false,

        });
    };

    deleteTodo = () => {
        if (this.props.todo.id != null && this.props.todo.complete) {
            deleteTodoById(this.props.todo.id).then(() => this.props.reload());
        } else {
            this.showModal();
        }
    }

    render() {
        return (
            <Col className="gutter-ro" span={6} >
                <Card title={this.props.todo.title} className={styles.todoCard}>
                    <p>Description:</p>
                    <p>{this.props.todo.description}</p>

                    <p>Complete: <Checkbox disabled checked={this.props.todo.complete}/></p>
                    <Button type="primary" onClick={this.handleUpdate}>Update</Button>

                    <p>Complete: <Checkbox defaultChecked={this.props.todo.complete} disabled /></p>

                    <Button type="primary" danger onClick={this.deleteTodo}>
                        Delete
                    </Button>
                    <Modal
                        title="Delete Todo"
                        visible={this.state.modalVisible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <p className={styles.dangerDeleteTodo}>In order to delete a todo, it MUST be completed!</p>
                    </Modal>

                    <TodoUpdateModal visible={this.state.updateModalVisible}
                                     todo={this.props.todo}
                                     onCancel={this.handleCancel}
                                     reload={this.props.reload}/>

                </Card>
            </Col>
        );
    }
}


=======
// @ts-ignore

export default TodoItem;