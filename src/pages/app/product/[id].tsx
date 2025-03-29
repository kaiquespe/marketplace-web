import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { ProductImageUpload } from "../../../components/product-image-upload";
import { Select } from "../../../components/select";
import { cn } from "../../../lib/utils";

export function ProductForm() {
	const params = useParams<{ id: string }>();
	const isEditing = Boolean(params.id);

	return (
		<>
			<Helmet title={isEditing ? "Edição de Produto" : "Novo produto"} />
			<div className="flex flex-col gap-10 px-32 py-10">
				<section className="flex flex-col gap-2 mt-16">
					<div className="flex justify-between items-start">
						<div>
							<h1 className="title-md">{isEditing ? "Editar produto" : "Novo produto"}</h1>
							<p className="body-sm text-gray-500">
								{isEditing
									? "Gerencie as informações do produto selecionado"
									: "Cadastre um produto para venda na plataforma"}
							</p>
						</div>
						{isEditing && (
							<div className="flex gap-4">
								<Button
									label="Marcar como vendido"
									variant="link"
									size="sm"
									onClick={() => {}}
									icon="Tick02Icon"
								/>
								<Button
									label="Desativar produto"
									variant="link"
									size="sm"
									onClick={() => {}}
									icon="UnavailableIcon"
								/>
							</div>
						)}
					</div>
				</section>

				<section className="flex gap-8">
					<aside className="w-[415px]">
						<ProductImageUpload />
					</aside>

					<div className="flex-1">
						<div className="bg-white rounded-[20px] p-6">
							<h3 className="text-lg font-medium mb-6">Dados do produto</h3>

							<form className="flex flex-col gap-6">
								<div className="flex gap-4">
									<div className="flex-1">
										<Input
											id="title"
											type="text"
											label="Título"
											placeholder="Nome do produto"
										/>
									</div>
									<div className="w-[180px]">
										<Input
											id="price"
											type="text"
											label="Preço"
											placeholder="R$ 0,00"
										/>
									</div>
								</div>

								<Input
									id="description"
									type="text"
									label="Descrição"
									placeholder="Descreva seu produto em poucas palavras"
								/>

								<Select
									id="category"
									label="Categoria"
									placeholder="Selecione uma categoria"
									options={[
										{ label: "Eletrônicos", value: "electronics" },
										{ label: "Acessórios", value: "accessories" },
										{ label: "Roupas", value: "clothing" },
									]}
								/>

								<div className="flex justify-end gap-4 pt-4">
									<Button
										label="Cancelar"
										variant="outline"
										size="md"
										onClick={() => {}}
									/>
									<Button
										label={isEditing ? "Salvar alterações" : "Salvar produto"}
										variant="solid"
										size="md"
										onClick={() => {}}
									/>
								</div>
							</form>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
