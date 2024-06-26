import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "../../../main";
import "../../../pages/Themes/Styles.css"

const TypeBar = observer(() => {
  const { instrument } = useContext(Context);

  return (
      <ListGroup className="type-bar">
          {instrument.types.map(type =>
              <ListGroup.Item
                  style={{ cursor: 'pointer' }}
                  active={type.id === (instrument.selectedType ? instrument.selectedType.id : null)}
                  onClick={() => instrument.setSelectedType(type)}
                  key={type.id}
              >
                  {type.name}
              </ListGroup.Item>
          )}
      </ListGroup>
  );
});

export default TypeBar;
