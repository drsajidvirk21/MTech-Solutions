const projectService = require('../services/projectService');

const getAllProjects = async (req, res) => {
  try {
    const projects = await projectService.getAll(req.user.id);
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

const createProject = async (req, res) => {
  try {
    const projectData = {
      ...req.body,
      client_id: req.user.id
    };
    const projectId = await projectService.create(projectData);
    res.status(201).json({ id: projectId, message: 'Project created successfully' });
  } catch (error) {
    console.error('Error creating project:', error.message);
    res.status(400).json({ error: error.message });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await projectService.getById(req.params.id, req.user.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    console.error('Error fetching project:', error.message);
    res.status(500).json({ error: 'Failed to fetch project' });
  }
};

const updateProject = async (req, res) => {
  try {
    const updated = await projectService.update(req.params.id, req.body, req.user.id);
    if (!updated) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json({ message: 'Project updated successfully' });
  } catch (error) {
    console.error('Error updating project:', error.message);
    res.status(400).json({ error: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const deleted = await projectService.remove(req.params.id, req.user.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error.message);
    res.status(500).json({ error: 'Failed to delete project' });
  }
};

module.exports = {
  getAllProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject
};
"