class Node {
    // @params = id: number, distances: Map<number, boolean>, neighbours: Map<number, number>
    constructor(id) {
        this.id = id;
        this.distances = new Map();
        this.neighbours = new Map();
        this.previousVertex = null;
    }
    // @params = graph: number[] 
    populateNeighbours(graph) {
        let counter = 0;
        for (let vertex of graph) {
            if (counter !== this.id && vertex !== 0) {
                this.neighbours.set(counter, true);
            }
            counter++;
        }
    }
}

class Dijkstra {
    // @params = graph: number[][], src: number
    constructor(graph, src) {
        this.graph = graph;
        this.src = src;
        this.sptSet = [];
        this.nodes = [];

        this.visited = [];
        this.unvisited = [];
        this.distancesOfEachVertexFromSRC = new Map();

        this.addNeighbours(graph);
        this.calculateInitialDistances(this.nodes[src]);
        while (this.vertexesLeftToVisit()) {
            this.applyDijkstra(this.unvisited, this.nodes[src]);
        }
        console.log(this.distancesOfEachVertexFromSRC, this.nodes)
    }

    vertexesLeftToVisit() {
        for (let v of this.unvisited) {
            if (!v) continue;
            else return true;
        }
        return false;
    }


    // @params = graph: number[][] @return void
    addNeighbours(graph) {
        // Filling the unvisited array with all the nodes from the graph. 
        // The id of each node is represented by the index that they are placed in the array.
        for (let i = 0; i < graph.length; i++) {
            const node = new Node(i);
            node.populateNeighbours(graph[i]);
            this.unvisited.push(node);
            this.nodes.push(node);
        }
    }

    // @params = startVertex: Node @return void
    calculateInitialDistances(startVertex) {
        for (let node of this.nodes) {
            if (node.id === startVertex.id) {
                this.distancesOfEachVertexFromSRC.set(this.src, 0);
            }
            else this.distancesOfEachVertexFromSRC.set(node.id, Infinity);
        }

        for (let node of this.nodes) {
            if (node.neighbours.size) {
                for (let vertex of node.neighbours.keys()) {
                    node.distances.set(vertex, this.consultAdjencyMatrixDistances(vertex, node.id));
                }
            }
        }
    }

    // @params = target: Node.id:number, from: Node.id:number @return distance: number
    consultAdjencyMatrixDistances(target, from) {
        return this.graph[target][from];
    }

    // @params = Node[], startVertex: Node
    applyDijkstra(unvisitedVertexes, startVertex) {
        let smallestKnownDistance = Infinity;
        let currentNeighboursToVisit = [];
        let chosenVertex = startVertex;

        for (let vertex of unvisitedVertexes) {
            if (!vertex) continue;

            let distanceThisVertex = this.distancesOfEachVertexFromSRC.get(vertex.id);
            if (distanceThisVertex < smallestKnownDistance) {
                smallestKnownDistance = distanceThisVertex;
                chosenVertex = vertex;
            }
        }
        for (let vertex of chosenVertex.neighbours.keys()) {
            // Adding vertexes to visit that are unvisited and are neighbours to the chosenVertex
            if (unvisitedVertexes[vertex] && unvisitedVertexes[vertex].id) currentNeighboursToVisit.push(unvisitedVertexes[vertex]);
        }
        for (let vertex of currentNeighboursToVisit) {
            let distanceThisVertex = this.distancesOfEachVertexFromSRC.get(vertex.id);
            
            if (chosenVertex.distances.get(vertex.id) + smallestKnownDistance < distanceThisVertex) {
                this.distancesOfEachVertexFromSRC.set(vertex.id, chosenVertex.distances.get(vertex.id) + smallestKnownDistance);
                this.nodes[vertex.id].previousVertex = chosenVertex.id;
            }
        }

        this.visited.push(chosenVertex.id);
        let counter = 0;
        for (let vertex of this.unvisited) {
            if (!vertex) {
                counter++;
                continue;
            }
            if (vertex.id === chosenVertex.id) delete this.unvisited[counter];
            counter++;
        }
    }
}
// src -> 0
//[ 0 -> [0, 4, 0, 0, 0, 0, 0, 8, 0], 
//  1 -> [4, 0, 8, 0, 0, 0, 0, 11, 0], 
//  2 -> [0, 8, 0, 7, 0, 4, 0, 0, 2], 
//  3 -> [0, 0, 7, 0, 9, 14, 0, 0, 0], 
//  4 -> [0, 0, 0, 9, 0, 10, 0, 0, 0], 
//  5 -> [0, 0, 4, 14, 10, 0, 2, 0, 0], 
//  6 -> [0, 0, 0, 0, 0, 2, 0, 1, 6], 
//  7 -> [8, 11, 0, 0, 0, 0, 1, 0, 7], 
//  8 -> [0, 0, 2, 0, 0, 0, 6, 7, 0]]; 

let graph =
    [[0, 4, 0, 0, 0, 0, 0, 8, 0],
    [4, 0, 8, 0, 0, 0, 0, 11, 0],
    [0, 8, 0, 7, 0, 4, 0, 0, 2],
    [0, 0, 7, 0, 9, 14, 0, 0, 0],
    [0, 0, 0, 9, 0, 10, 0, 0, 0],
    [0, 0, 4, 14, 10, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 1, 6],
    [8, 11, 0, 0, 0, 0, 1, 0, 7],
    [0, 0, 2, 0, 0, 0, 6, 7, 0]];

let algo = new Dijkstra(graph, 0);

module.exports = { Dijkstra };