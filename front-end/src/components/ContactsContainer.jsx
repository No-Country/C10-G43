import ContactItem from "./ContactItem";

const ContactsContainer = ({ contacts }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          type={contact.type}
          id={contact.id}
        />
      ))}
    </div>
  );
};

export default ContactsContainer;
