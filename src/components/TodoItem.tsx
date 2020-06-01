import {Component} from "react";
import {Space, Card, Checkbox} from "antd";
import React from "react";
import Todo from "../service/Todo";

interface TodoProp {
    todo: Todo;
}
class TodoItem extends Component<TodoProp> {
    constructor(props: TodoProp) {
        super(props);
    }

    render() {

        // @ts-ignore
        return (
            <Space direction="vertical">
                <Card title = {this.props.todo.title}>
                    <p>description </p>
                        <p> {this.props.todo.description}</p>
                            <p> Complete? :<Checkbox defaultChecked={this.props.todo.complete} disabled/></p>
                            </Card>
                                </Space>

                                    );

                                    }

                                    }

                                    export default TodoItem;