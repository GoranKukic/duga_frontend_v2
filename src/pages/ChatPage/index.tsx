import { useParams } from 'react-router';
import AppLayout from '../../components/AppLayout';
import Card from '../../components/Card';
import { useGetAllMessages } from './hooks';
import Loader from '../../components/Loader';
import SendMessage from './components/SendMessage';

interface IMessage {
  id: string;
  message: string;
  createdAt: string;
}

const currentUserMessageStyles = 'bg-blue text-white py-2 px-4 rounded-full mb-2 max-w-[200px]';

const ChatPage = () => {
  const { chatId } = useParams();
  const { allMessages, isAllMessagesLoading } = useGetAllMessages(chatId as string);
  const descendingMessages = allMessages?.data?.messages?.sort((a: IMessage, b: IMessage) => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  if (isAllMessagesLoading) {
    return (
      <AppLayout>
        <Loader />
      </AppLayout>
    );
  }

  if (!allMessages?.data?.messages?.length) {
    return (
      <AppLayout>
        <Card>
          <h1>Chat Page</h1>
          <p>Nema poruka</p>
          <SendMessage chatId={chatId} />
        </Card>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <Card>
        <h1>Chat Page</h1>
        <div className="mt-4">
          {descendingMessages.map((message: IMessage) => (
            <div className={currentUserMessageStyles} key={message.id}>
              <p>{message.message}</p>
            </div>
          ))}
        </div>
        <SendMessage chatId={chatId} />
      </Card>
    </AppLayout>
  );
};

export default ChatPage;
