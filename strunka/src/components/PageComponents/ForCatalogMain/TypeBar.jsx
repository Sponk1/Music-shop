import { observer } from "mobx-react-lite";
import React, {useContext} from "react";
import { Context } from "../../../main";
import { ListGroup} from "react-bootstrap";

const TypeBar = observer( () => {
    const {instrument} = useContext(Context)

    return (
      <ListGroup>
        {instrument.types.map(type =>
            <ListGroup.Item
                active={type.id === instrument.selectedType.id}
                onClick={() => instrument.setSelectedType(type) }
                key={type.id}
            >
                {type.name}
            </ListGroup.Item>
        )}
      </ListGroup>
    );
});

export default TypeBar;