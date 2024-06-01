import { ReadStream } from 'fs';
import { DataSource, EntityManager, ObjectLiteral, QueryResult, QueryRunner, ReplicationMode, Table, TableCheck, TableColumn, TableExclusion, TableForeignKey, TableIndex, TableUnique, View } from 'typeorm';
import { SqlInMemory } from 'typeorm/driver/SqlInMemory';
import { IsolationLevel } from 'typeorm/driver/types/IsolationLevel';
import { Broadcaster } from 'typeorm/subscriber/Broadcaster';

export class PostgresQueryRunner implements QueryRunner {
    connection: DataSource;
    broadcaster: Broadcaster;
    manager: EntityManager;
    isReleased: boolean;
    isTransactionActive: boolean;
    data: ObjectLiteral;
    loadedTables: Table[];
    loadedViews: View[];
    connect(): Promise<any> {
        throw new Error('Method not implemented.');
    }
    beforeMigration(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    afterMigration(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    release(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    clearDatabase(database?: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    startTransaction(isolationLevel?: IsolationLevel): Promise<void> {
        throw new Error('Method not implemented.');
    }
    commitTransaction(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    rollbackTransaction(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    query(query: string, parameters: any[], useStructuredResult: true): Promise<QueryResult>;
    query(query: string, parameters?: any[]): Promise<any>;
    query(query: unknown, parameters?: unknown, useStructuredResult?: unknown): Promise<any> | Promise<import("typeorm").QueryResult> {
        throw new Error('Method not implemented.');
    }
    stream(query: string, parameters?: any[], onEnd?: Function, onError?: Function): Promise<ReadStream> {
        throw new Error('Method not implemented.');
    }
    getDatabases(): Promise<string[]> {
        throw new Error('Method not implemented.');
    }
    getSchemas(database?: string): Promise<string[]> {
        throw new Error('Method not implemented.');
    }
    getTable(tablePath: string): Promise<Table> {
        throw new Error('Method not implemented.');
    }
    getTables(tablePaths?: string[]): Promise<Table[]> {
        throw new Error('Method not implemented.');
    }
    getView(viewPath: string): Promise<View> {
        throw new Error('Method not implemented.');
    }
    getViews(viewPaths?: string[]): Promise<View[]> {
        throw new Error('Method not implemented.');
    }
    getReplicationMode(): ReplicationMode {
        throw new Error('Method not implemented.');
    }
    hasDatabase(database: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    getCurrentDatabase(): Promise<string> {
        throw new Error('Method not implemented.');
    }
    hasSchema(schema: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    getCurrentSchema(): Promise<string> {
        throw new Error('Method not implemented.');
    }
    hasTable(table: string | Table): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    hasColumn(table: string | Table, columnName: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    createDatabase(database: string, ifNotExist?: boolean): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropDatabase(database: string, ifExist?: boolean): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createSchema(schemaPath: string, ifNotExist?: boolean): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropSchema(schemaPath: string, ifExist?: boolean, isCascade?: boolean): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createTable(table: Table, ifNotExist?: boolean, createForeignKeys?: boolean, createIndices?: boolean): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropTable(table: string | Table, ifExist?: boolean, dropForeignKeys?: boolean, dropIndices?: boolean): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createView(view: View, syncWithMetadata?: boolean, oldView?: View): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropView(view: string | View): Promise<void> {
        throw new Error('Method not implemented.');
    }
    renameTable(oldTableOrName: string | Table, newTableName: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    changeTableComment(tableOrName: string | Table, comment?: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    addColumn(table: string | Table, column: TableColumn): Promise<void> {
        throw new Error('Method not implemented.');
    }
    addColumns(table: string | Table, columns: TableColumn[]): Promise<void> {
        throw new Error('Method not implemented.');
    }
    renameColumn(table: string | Table, oldColumnOrName: string | TableColumn, newColumnOrName: string | TableColumn): Promise<void> {
        throw new Error('Method not implemented.');
    }
    changeColumn(table: string | Table, oldColumn: string | TableColumn, newColumn: TableColumn): Promise<void> {
        throw new Error('Method not implemented.');
    }
    changeColumns(table: string | Table, changedColumns: { oldColumn: TableColumn; newColumn: TableColumn; }[]): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropColumn(table: string | Table, column: string | TableColumn): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropColumns(table: string | Table, columns: string[] | TableColumn[]): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createPrimaryKey(table: string | Table, columnNames: string[], constraintName?: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    updatePrimaryKeys(table: string | Table, columns: TableColumn[]): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropPrimaryKey(table: string | Table, constraintName?: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createUniqueConstraint(table: string | Table, uniqueConstraint: TableUnique): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createUniqueConstraints(table: string | Table, uniqueConstraints: TableUnique[]): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropUniqueConstraint(table: string | Table, uniqueOrName: string | TableUnique): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropUniqueConstraints(table: string | Table, uniqueConstraints: TableUnique[]): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createCheckConstraint(table: string | Table, checkConstraint: TableCheck): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createCheckConstraints(table: string | Table, checkConstraints: TableCheck[]): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropCheckConstraint(table: string | Table, checkOrName: string | TableCheck): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropCheckConstraints(table: string | Table, checkConstraints: TableCheck[]): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createExclusionConstraint(table: string | Table, exclusionConstraint: TableExclusion): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createExclusionConstraints(table: string | Table, exclusionConstraints: TableExclusion[]): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropExclusionConstraint(table: string | Table, exclusionOrName: string | TableExclusion): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropExclusionConstraints(table: string | Table, exclusionConstraints: TableExclusion[]): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createForeignKey(table: string | Table, foreignKey: TableForeignKey): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createForeignKeys(table: string | Table, foreignKeys: TableForeignKey[]): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropForeignKey(table: string | Table, foreignKeyOrName: string | TableForeignKey): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropForeignKeys(table: string | Table, foreignKeys: TableForeignKey[]): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createIndex(table: string | Table, index: TableIndex): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createIndices(table: string | Table, indices: TableIndex[]): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropIndex(table: string | Table, index: string | TableIndex): Promise<void> {
        throw new Error('Method not implemented.');
    }
    dropIndices(table: string | Table, indices: TableIndex[]): Promise<void> {
        throw new Error('Method not implemented.');
    }
    clearTable(tableName: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    enableSqlMemory(): void {
        throw new Error('Method not implemented.');
    }
    disableSqlMemory(): void {
        throw new Error('Method not implemented.');
    }
    clearSqlMemory(): void {
        throw new Error('Method not implemented.');
    }
    getMemorySql(): SqlInMemory {
        throw new Error('Method not implemented.');
    }
    executeMemoryUpSql(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    executeMemoryDownSql(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    // Tutaj znajduje się implementacja metod QueryRunner dla PostgreSQL
}
