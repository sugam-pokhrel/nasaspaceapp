// import React from 'react'
// import Link from 'next/link'
// import
// const page = () => {
//     const [messages, setMessages] = useState([]);
//     const [newMessage, setNewMessage] = useState('');
//     const chatContainerRef = useRef();
  
//     useEffect(() => {
//       // Fetch chat messages from an API or database and populate the 'messages' state
//       axios.get('/api/messages').then((response) => {
//         setMessages(response.data);
//       });
//     }, []);
  
//     const handleNewMessageChange = (event) => {
//       setNewMessage(event.target.value);
//     };
  
//     const handleSendMessage = () => {
//       // Send the new message to the server and update the 'messages' state
//       axios.post('/api/messages', { text: newMessage }).then((response) => {
//         setMessages([...messages, response.data]);
//         setNewMessage('');
//       });
//     };
  
//     useEffect(() => {  chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }, [messages]);
  
//   return (
//     <>
//     <div className='teamSection grid grid-cols-3'>
//       <div className='teamNav'>
//         <Link href={"/"}><img src="./sciMart.png" width={"100px"} alt="" /></Link>
//         <ul>
//        <li><Link href='/Team' className='chatLinks mb-4'><h2>Team</h2></Link></li>
//        <li>  <Link href='/invite' className='chatLinks mb-4'><h2>Invite</h2></Link></li>
//       <li><Link href='/chat' className='chatLinks'><h2>Chat</h2></Link></li>
//       <li> <Link href='/marketplace' className='chatLinks'><h2>Marketplace</h2></Link></li>
//       <li> <Link href='/tasks' className='chatLinks'><h2>Task </h2></Link></li>
//         </ul>
//         </div>
//         <div className='teamChatMain mt-5'>
//           <h1>Team Chat</h1>
//           <div className="flex flex-col h-screen">
//       <div className="bg-gray-800 text-white p-4">Chat App</div>
//       <div className="flex-grow bg-gray-100 p-4" ref={chatContainerRef}>
//         {messages.map((message) => (
//           <ChatMessage key={message.id} message={message} />
//         ))}
//       </div>
//       <ChatInput
//         newMessage={newMessage}
//         onChange={handleNewMessageChange}
//         onSubmit={handleSendMessage}
//       />
//     </div>
//      </div>
// </div>
//     </>
//   )
// }

// export default page