import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import userStore from "../Store/userStore";
import cartStore from "../store/cartStore";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";

function Cart() {
  const userName = userStore((state) => state.userName);

  // plusCount, minusCount 추가
  const {
    cartData,
    addItem,
    removeItem,
    updateItem,
    plusCount,
    minusCount,
  } = cartStore();

  const [form, setForm] = useState({
    id: "",
    name: "",
    count: 1,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const updated = { ...prev };
      if (name === "id" || name === "count") {
        updated[name] = value === "" ? "" : Number(value);
      } else if (name === "name") {
        updated[name] = value;
      }
      return updated;
    });
  };

  const handleAdd = () => {
    addItem(form);
    clearForm();
  };

  const handleDelete = () => {
    removeItem(form.id);
    clearForm();
  };

  const handleUpdate = () => {
    updateItem(form.id, form);
    clearForm();
  };

  const clearForm = () => {
    setForm({
      id: "",
      name: "",
      count: 1,
    });
  };

  return (
    <div>
      {/* CRUD 테스트 용 폼 */}
      <Form className="mb-3 px-3">
        <Row className="gy-2 gx-2 aling-items-end">
          <Col xs={12} md={2}>
            <Form.Label>ID</Form.Label>
            <Form.Control
              name="id"
              type="number"
              placeholder="예: 2"
              min={0}
              value={form.id}
              onChange={onChange}
            />
          </Col>
          <Col xs={12} md={6}>
            <Form.Label>상품명</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="예: Red Nike Air"
              value={form.name}
              onChange={onChange}
            />
          </Col>
          <Col xs={12} md={2}>
            <Form.Label>수량</Form.Label>
            <InputGroup>
              <Form.Control
                name="count"
                type="number"
                placeholder="1"
                min={1}
                value={form.count}
                onChange={onChange}
              />
            </InputGroup>
          </Col>
          <Col xs={12} md={2} className="d-flex gap-2">
            <Button variant="primary" className="flex-fill" onClick={handleAdd}>
              추가
            </Button>
            <Button
              variant="warning"
              className="flex-fill"
              onClick={handleUpdate}
            >
              수정
            </Button>
            <Button
              variant="danger"
              className="flex-fill"
              onClick={handleDelete}
            >
              삭제
            </Button>
          </Col>
        </Row>
      </Form>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>금액</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>00000000</td>
              <td>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => plusCount(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => minusCount(item.id)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    삭제
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default React.memo(Cart);
