import { Task } from '../Task';


describe('Task', () => {


  it("should define instance task", () => {
    const task = new Task("Estudar", "Estudos sobre o typescript");
    expect(task).toBeInstanceOf(
      Task
    )
  })


  it("should return error when title is empty", () => {

    expect(()=> new Task("", "Estudos sobre o typescript")).toThrow("Título inválido")

  })

  it("should return error when title is short", () => {

    expect(()=> new Task("Título curto demais","" )).toThrow("Descrição inválida")
  })

  it("should return error when title is short", () => {
  expect(()=> new Task("Título curto demais","Ok" )).toThrow("Descrição curta demais")
  })

  it("shoud completed be false", () => {

    const task = new Task("Estudar", "Estudos sobre o typescript");


    expect(task.completed).toBe(false)
  })

  it("shoud completed be false", () => {

    const task = new Task("Estudar", "Estudos sobre o typescript", true);


    expect(task.completed).toBe(true)
  })

});
