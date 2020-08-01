import React, { useState } from "react";
import "./guestlist.css";
import { Guest } from "./guest";
import { GuestForm } from "./guestform";

interface GuestInfo {
  pic: string;
  guestName: string;
}

export const GuestList: React.FC = () => {
  const [guests, setGuests] = useState(new Array<GuestInfo>());

  const addGuest = (pic: string, guestName: string) => {
    const g = guests.slice();
    g.push({ pic, guestName });
    setGuests(g);
  };

  const removeGuest = (i: number) => {
    const g = guests.slice();
    g.splice(i, 1);
    setGuests(g);
  };

  return (
    <div>
      <h1>Guest List</h1>
      <GuestForm addGuest={addGuest}></GuestForm>
      {guests.map((curGuest, index) => {
        return (
          <Guest
            key={`guest-${index}`}
            pic={curGuest.pic}
            guestName={curGuest.guestName}
            removeGuest={() => {
              removeGuest(index);
            }}
          ></Guest>
        );
      })}
    </div>
  );
};

export default GuestList;

// interface IProps {}

// interface IState {
//   value: string;
//   todos: Array<String>;
// }

// class TodoList extends React.Component<IProps, IState> {
//   constructor(props: IProps) {
//     super(props);
//     this.state = {
//       value: "",
//       todos: [],
//     };
//   }

//   addGuest(pic: File, guest: string) {
//     if (this.state.value.length === 0) return;
//     const todos = this.state.todos.slice();
//     if (todos.length >= 9) return;
//     todos.push(this.state.value);
//     this.setState({ todos });
//   }

//   removeTodo(i: number) {
//     const todos = this.state.todos.slice();
//     todos.splice(i, 1);
//     this.setState({ todos });
//   }

//   render() {
//     return (
//       <div>
//         <div>TodoList</div>
//         <GuestForm addGuest={this.addGuest.bind(this)}></GuestForm>
//         {this.state.todos.map((value, index) => {
//           return (
//             <Todo
//               key={index}
//               value={value}
//               onClick={() => {
//                 this.removeTodo(index);
//               }}
//             ></Todo>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default TodoList;
