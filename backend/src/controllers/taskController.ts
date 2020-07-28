import Task from "../models/task";
import task from "../models/task";

class TaskController {
	async store(req, res) {
		try {
			const { name, desc, markedDate } = req.body;
			const currentDate = new Date();
			let open = markedDate > currentDate;

			const task = {
				name,
				desc,
				createDate: currentDate,
				markedDate,
				updateDate: currentDate,
				open: true,
			};

			const result = await Task.create(task);
			return res.status(201).json(result);
		} catch (err) {
			return res
				.status(500)
				.json({ message: "Desculpe não foi possivel criar a tarefa", err });
		}
	}

	async index(req, res) {
		try {
			const tasks = await Task.find();

			if (task.length > 0) return res.status(200).json(tasks);

			return res
				.status(200)
				.json({ message: "Ainda não existem tarefas agendadas" });
		} catch (err) {
			return res.status(500).json({
				message: "Desculpe não conseguimos buscar as tarefas no servidor",
			});
		}
	}

	async update(req, res) {
		try {
			const { oldId } = req.body;
			const { name, desc, createDate, markedDate, open } = req.body;

			const task = {
				name,
				desc,
				createDate,
				markedDate,
				updateDate: new Date(),
				open,
			};
			await Task.findByIdAndUpdate(oldId, task);

			return res.status(200).json({ message: "Tarefa atualizada com sucesso" });
		} catch (err) {
			return res.status(500).json({
				message: "Desculpe não foi possivel atualizar a tarefa",
				error: err,
			});
		}
	}

	async delete(req, res) {
		try {
			const { id } = req.body;
			const result = await Task.findByIdAndDelete(id);
			return res.status(200).json(result);
		} catch (err) {
			return res.status(500).json({
				message: "Desculpe não conseguimos deletar a tarefa",
				error: err,
			});
		}
	}

	async show(req, res) {
		try {
			const { id } = req.body;
			const result = await Task.findById(id);
			return res.status(200).json(result);
		} catch (err) {
			return res.status(500).json({
				message: "Desculpe não conseguimos encontrar a tarefa",
				error: err,
			});
		}
	}
}

export default new TaskController();
