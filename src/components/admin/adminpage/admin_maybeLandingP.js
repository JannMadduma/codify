import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Client extends Component {
  state = {
    clients: [],
    loading: true,
  };

  async componentDidMount() {
    const res = await axios.get("http://127.0.0.1:8000/api/clients");

    if (res.data.status === 200) {
      this.setState({
        clients: res.data.clients,
        loading: false,
      });
    }
  }

  render() {
    var client_HTMLTABLE = "";
    if (this.state.loading) {
      client_HTMLTABLE = (
        <tr>
          <td colSpan="7">
            <h2>Loading...</h2>
          </td>
        </tr>
      );
    } else {
      client_HTMLTABLE = this.state.clients.map((item) => {
        return (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.project}</td>
            <td>
              <Link
                to={`edit-client/${item.id}`}
                className="btn btn-success btn-sm"
              >
                Edit
              </Link>
            </td>
            <td>
              <button type="button" className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
        );
      });
    }

    deleteClient = async (e, id) => {
        const thisClickedFund = e.currentTarget;
        thisClickedFund.innerText = "Deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/delete-client/${id}`);
        if(res.data.status === 200){
            thisClickedFund.closest("tr").remove();
            console.log(res.data.message);
        }
    }

    render(){

        var client_HTMLTABLE = "";
        if(this.state.loading)
        {
            client_HTMLTABLE = <tr><td colSpan="7"><h2>Loading...</h2></td></tr>;
        }
        else {
            client_HTMLTABLE = 
            this.state.clients.map((item) => {
                return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.project}</td>
                        <td>
                            <Link to={`edit-client/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                        </td>
                        <td>
                            <button type="button" onClick={(e) => this.deleteClient(e, item.id)} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                  </thead>
                  <tbody>{client_HTMLTABLE}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Client;
