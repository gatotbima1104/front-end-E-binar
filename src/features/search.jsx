import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
const { SearchBar } = Search;
const events = [
    {
        judul: "Seminar IT Technology",
        date: "12-12-2020",
        desc: "seminar bersama kami",
        Image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.learn2groomdogs.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fseminar.jpg&f=1&nofb=1&ipt=2b1d01e2ef89f0d78490bb6b12652dd354d8050cec3483b81dfa7f0158b922cc&ipo=images"
    }, 
    {
        judul: "Seminar musik",
        date: "12-10-2020",
        desc: "nyanyi bersama kami",
        Image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images"
    }, 
    {
        judul: "Seminar musik",
        date: "12-10-2020",
        desc: "nyanyi bersama kami",
        Image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images"
    }, 
    {
        judul: "Seminar IT Technology",
        date: "12-12-2020",
        desc: "seminar bersama kami",
        Image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.learn2groomdogs.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fseminar.jpg&f=1&nofb=1&ipt=2b1d01e2ef89f0d78490bb6b12652dd354d8050cec3483b81dfa7f0158b922cc&ipo=images"
    }, 
    {
        judul: "Seminar musik",
        date: "12-10-2020",
        desc: "nyanyi bersama kami",
        Image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images"
    }, 
    {
        judul: "Seminar IT Technology",
        date: "12-12-2020",
        desc: "seminar bersama kami",
        Image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.learn2groomdogs.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fseminar.jpg&f=1&nofb=1&ipt=2b1d01e2ef89f0d78490bb6b12652dd354d8050cec3483b81dfa7f0158b922cc&ipo=images"
    }, 
    {
        judul: "Seminar musik",
        date: "12-10-2020",
        desc: "nyanyi bersama kami",
        Image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images"
    }, 
    {
        judul: "Seminar IT Technology",
        date: "12-12-2020",
        desc: "seminar bersama kami",
        Image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.learn2groomdogs.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fseminar.jpg&f=1&nofb=1&ipt=2b1d01e2ef89f0d78490bb6b12652dd354d8050cec3483b81dfa7f0158b922cc&ipo=images"
    }, 
    {
        judul: "Seminar musik",
        date: "12-10-2020",
        desc: "nyanyi bersama kami",
        Image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.languages.work%2Fwp-content%2Fuploads%2F2018%2F02%2Fseminars.png&f=1&nofb=1&ipt=b89df350a32e195b76d20623fe694e32c4953cb6eef1b8f3bf57eba8cedc2f9e&ipo=images"
    }, 
]

const Find = (props) => {
  return (
    <div>
      <ToolkitProvider keyField="id" data={props.judul} columns={events} Find>
        {(props) => (
          <div>
            <h3>Input something at below input field:</h3>
            <SearchBar {...props.searchProps} />
            <hr />
            <BootstrapTable {...props.baseProps} />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
};

export default Find;
