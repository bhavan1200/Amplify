import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Button } from "react-native";
import ContactListItem from "../components/ContactListItem/index";
// import users from "../data/Users";
import { API, graphqlOperation, } from "aws-amplify";
import { listUsers } from "../src/graphql/queries";



export const ContactsScreen = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try{
         const usersData = await API.graphql(
           graphqlOperation(
             listUsers
            )
          )
          
           setUsers(usersData.data.listUsers.items)
      } catch(e) {
          console.log(e);
      }
    }
      fetchUsers();
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        style={{ width: "100%" }}
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} />}
      />
    </View>
  );
};

export default ContactsScreen;
