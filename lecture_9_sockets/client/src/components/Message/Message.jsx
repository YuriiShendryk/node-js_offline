export const Message = ({ userName, text, className = '', createdAt }) => {
     return (
       <div className={`messages__item ${className}`}>
         <p style={{fontSize: 12}}>{createdAt}</p>
         <p>
           <b style={{color: '#f38a43'}}>{userName}:</b> <span style={{color: '#045fc8'}}>{text}</span></p>
       </div>
     );
   }
